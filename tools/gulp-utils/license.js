const json5 = require("json5");
const through = require("through2");

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}

const hashLicense = () =>
  `##########
# Copyright (c) ${new Date().getFullYear()} Darkosto Entertainment LLC
#
# All rights reserved.
##########

`;

const jsLicense = () =>
  `/*!
 * Copyright (c) ${new Date().getFullYear()} Darkosto Entertainment LLC
 *
 * All rights reserved.
 */

`;

const jsonLicense = () => ({
  line1: `Copyright (c) ${new Date().getFullYear()} Darkosto Entertainment LLC`,
  line2: "All rights reserved.",
});

/**
 *
 * @param {*} licenseStyle "hash" | "js"
 * @returns
 */
module.exports = (licenseStyle) =>
  through.obj((file, encoding, callback) => {
    if (file.isNull()) {
      return callback(null, file);
    }

    let template;
    switch (licenseStyle) {
      case "hash":
        template = hashLicense;
        break;
      case "js":
        template = jsLicense;
        break;
      default:
        return callback(new Error("Unsupported license style"));
    }

    if (file.isBuffer()) {
      if (licenseStyle === "json") {
        const json = json5.parse(file.contents.toString());

        file.contents = Buffer.from(
          JSON.stringify({
            __copyright: template(),
            ...json,
          })
        );
      } else {
        file.contents = Buffer.from(template() + file.contents);
      }
    }

    if (file.isStream()) {
      if (licenseStyle === "json") {
        return callback(new Error("JSON does not support streams"));
      }
      file.contents = file.contents.pipe(prefixStream(template()));
    }

    return callback(null, file);
  });

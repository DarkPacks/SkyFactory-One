/*
 * This file makes a basic void dimension with oak tree starting structure
 */

/*
 * Sets the spawn structure
 * structure path, spawn height
 */
setSpawnStructure("examples/structures/oaktree", 64);

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	/*
	 * Creates a list of biomes, removing ones from the two remove lists
	 */
	var biomesToRemove = Java.to(
		[],
		"java.lang.String[]"
	);
	var biomeTypesToRemove = Java.to(
		[
			BiomeDictionary.Type.WATER,
			BiomeDictionary.Type.BEACH,
			BiomeDictionary.Type.VOID,
			BiomeDictionary.Type.OCEAN,
		],
		"net.minecraftforge.common.BiomeDictionary$Type[]"
	);
	var biomes = Util.Biomes.withoutBiomes(Util.Biomes.withoutTypes(Util.Biomes.forOverworld(), biomeTypesToRemove), biomesToRemove);
	/*
	 * Makes the BiomeProvider
	 * biomes, seed, biome size, registry
	 */
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 4, biomeRegistry);
	/*
	 * Makes the ChunkGenerator
	 */
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed);
}

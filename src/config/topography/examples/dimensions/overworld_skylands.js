/*
 * This file creates a skylands dimension with overworld biomes
 */

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	/*
	 * Creates a list of biomes, removing ones from the two remove lists.
	 * eroded_badlands does not work well with the terrain.
	 */
	var biomesToRemove = Java.to(
		[
			"minecraft:eroded_badlands"
		],
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
	 * Makes the ChunkGenerator.
	 * ChunkGeneratorSimplexSkylands has its own internal BiomeProvider.
	 * biomes, registry, dimension settings, seed, horizontal scale, vertical scale
	 */
	return new ChunkGeneratorSimplexSkylands(biomes, biomeRegistry, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed, 128, 32);
}

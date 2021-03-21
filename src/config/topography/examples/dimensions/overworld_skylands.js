
function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
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
	var biomes = BiomeHelper.withoutBiomes(BiomeHelper.withoutTypes(BiomeHelper.forOverworld(), biomeTypesToRemove), biomesToRemove);
	
	return new ChunkGeneratorSimplexSkylands(biomes, biomeRegistry, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed, 128, 32);
}

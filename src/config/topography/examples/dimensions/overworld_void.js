
setSpawnStructure("examples/structures/oaktree", 64);

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
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
	var biomes = BiomeHelper.withoutBiomes(BiomeHelper.withoutTypes(BiomeHelper.forOverworld(), biomeTypesToRemove), biomesToRemove);
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 6, biomeRegistry);
	
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed);
}

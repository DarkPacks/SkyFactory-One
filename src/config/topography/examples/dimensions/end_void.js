function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = BiomeHelper.forEnd();
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 4, biomeRegistry);
	
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:end");
	}, seed);
}

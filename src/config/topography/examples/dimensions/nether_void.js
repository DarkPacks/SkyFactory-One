function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = BiomeHelper.forNether();
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 6, biomeRegistry);
	
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:nether");
	}, seed);
}
setSpawnStructure("examples/structures/end_portal_placement_block", 64);


function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {

	var EndBiomeProvider = Java.type("net.minecraft.world.biome.provider.EndBiomeProvider");
	var biomeProvider = new EndBiomeProvider(biomeRegistry, seed);
	
	return new ChunkGeneratorNoiseTopo(biomeProvider, seed, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:end");
	}).removeCenterEndIsland();
}

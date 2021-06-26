setSpawnStructure("structures/end_portal_placement_block", 64);

setStructureSpacing("minecraft:endcity", 10, 5, 10387313);

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {

	var EndBiomeProvider = Java.type("net.minecraft.world.biome.provider.EndBiomeProvider");
	var biomeProvider = new EndBiomeProvider(biomeRegistry, seed);
	
	return new ChunkGeneratorNoiseTopo(biomeProvider, seed, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:end");
	}).removeCenterEndIsland();
}

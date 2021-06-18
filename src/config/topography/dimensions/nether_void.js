
//structure, average distance between placement attempts in chunks, minimum distance between two structures of type in chunks, some seed modifier number
//second number must be less than first number
setStructureSpacing("minecraft:fortress", 10, 4, 30084232);
setStructureSpacing("minecraft:bastion_remnant", 15, 3, 30084232);

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = Util.Biomes.forNether();
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 4, biomeRegistry);
	
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:nether");
	}, seed);
}
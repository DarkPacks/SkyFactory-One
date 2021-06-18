/*
 * This file makes an empty void dimension with end biomes.
 */

/*
 * Sets the spawn structure for the dimension.
 * This is just a bedrock block placed under where the end portal will generate so it doesn't generate in the void.
 */
setSpawnStructure("examples/structures/end_portal_placement_block", 64);

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	/*
	 * Gets a list of all the biomes for the end
	 */
	var biomes = Util.Biomes.forEnd();
	/*
	 * Makes the BiomeProvider
	 * biomes, seed, biome size, registry
	 */
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 4, biomeRegistry);
	
	/*
	 * Makes the ChunkGenerator
	 */
	return new ChunkGeneratorVoid(biomeProvider, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:end");
	}, seed);
}

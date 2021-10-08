
setDimensionType(Util.Dimensions.typeBuilder().fixedTime(18000).effects("topography:black").skylight(false).ceiling(true).build());
minGamma(0.0);
maxGamma(0.0);

var NoFeatureConfig = Java.type("net.minecraft.world.gen.feature.NoFeatureConfig");
var RegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.RegionFeatureConfig");
var CircleRegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.CircleRegionFeatureConfig");
var StructureFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StructureFeatureConfig");
var SpeleothemConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.SpeleothemConfig");
var BlockReplacement = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.BlockReplacement");
var COBBLESTONE = Util.Blocks.getState("minecraft:cobblestone");
var DIORITE = Util.Blocks.getState("minecraft:diorite");
var GRANITE = Util.Blocks.getState("minecraft:granite");
var ANDESITE = Util.Blocks.getState("minecraft:andesite");
var GRAVEL = Util.Blocks.getState("minecraft:gravel");

var randomSpawnerOptions = [
	"minecraft:spider",
	"minecraft:zombie",
	"minecraft:skeleton",
	"minecraft:cave_spider",
	"minecraft:husk",
	"minecraft:creeper",
	"minecraft:witch",
	"minecraft:phantom",
	"minecraft:evoker",
	"minecraft:stray",
	"minecraft:vindicator",
	"minecraft:zombie_villager"
]

function getRandomSpawner(rand) {
	return randomSpawnerOptions[rand.nextInt(randomSpawnerOptions.length)];
}

//Floor structures
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(20, 0, 2, 10, "structures/bentley_fairy_pool")));

addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 81, "structures/captainq1")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:red_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		if (rand.nextInt(5) == 0) {
			entities.add(Util.Entities.buildEntityInfo(pos2, pos2, Util.Entities.buildNBT("{id:\"artifacts:mimic\"}")));
			return null;
		}
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));

addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 81, "structures/captainq2")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:red_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		if (rand.nextInt(5) == 0) {
			entities.add(Util.Entities.buildEntityInfo(pos2, pos2, Util.Entities.buildNBT("{id:\"artifacts:mimic\"}")));
			return null;
		}
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));

addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 81, "structures/captainq3")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:red_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		if (rand.nextInt(5) == 0) {
			entities.add(Util.Entities.buildEntityInfo(pos2, pos2, Util.Entities.buildNBT("{id:\"artifacts:mimic\"}")));
			return null;
		}
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));

addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 80, "structures/bentley_tower")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:pink_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
	}
	else if (state == Util.Blocks.getState("minecraft:cyan_wool")) {
		if (rand.nextInt(2) == 0) {//Only place 50% of spawners
			return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:air"), null);
		} else {
			return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
		}
	}
	else if (state == Util.Blocks.getState("minecraft:orange_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		if (rand.nextInt(5) == 0) {
			entities.add(Util.Entities.buildEntityInfo(pos2, pos2, Util.Entities.buildNBT("{id:\"artifacts:mimic\"}")));
			return null;
		}
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	else if (state == Util.Blocks.getState("minecraft:stone_bricks") && rand.nextInt(20) == 0) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:infested_stone_bricks"), null);
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));

//Columns
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:column_formation", new SpeleothemConfig(COBBLESTONE, 10, 0, 2, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:column_formation", new SpeleothemConfig(DIORITE, 10, 0, 2, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:column_formation", new SpeleothemConfig(GRANITE, 10, 0, 2, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:column_formation", new SpeleothemConfig(ANDESITE, 10, 0, 2, 12, 4, 1)));

//Void holes
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:void_hole", new CircleRegionFeatureConfig(10, 0, 8, 10)));

//Stalactites
//Big
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 8, 5, 9, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(DIORITE, 8, 5, 9, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(GRANITE, 8, 5, 9, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(ANDESITE, 8, 5, 9, 10, 4, 1)));
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 6, 3, 13, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(DIORITE, 6, 3, 13, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(GRANITE, 6, 3, 13, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(ANDESITE, 6, 3, 13, 5, 3, 1)));

//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 4, 0, 16, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(DIORITE, 4, 0, 16, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(GRANITE, 4, 0, 16, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(ANDESITE, 4, 0, 16, 2, 3, 1)));

//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 2, 0, 16, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(DIORITE, 2, 0, 16, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(GRANITE, 2, 0, 16, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(ANDESITE, 2, 0, 16, 1, 2, 1)));

//Ceiling structures
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 2, 130, "structures/captainq_hanging_plus_chain")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:red_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildRandomSpawner(rand)));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));

addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 4, 77, "structures/captainq_chain")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand, entities, pos2) {
	if (state == Util.Blocks.getState("minecraft:red_wool")) {
		return Util.Blocks.buildBlockInfo(pos, Util.Blocks.getState("minecraft:spawner"), Util.Blocks.getNBT(Util.Blocks.buildRandomSpawner(rand)));
	}
	else if (Util.Blocks.getBlock(state) == Util.Blocks.getBlock("minecraft:chest")) {
		return Util.Blocks.buildBlockInfo(pos, state, Util.Blocks.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Blocks.buildBlockInfo(pos, state, nbt);
}))
.removeBlocks(Util.Blocks.getBlock("minecraft:air"))));


//Stalagmites
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 4, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(DIORITE, 10, 0, 3, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(GRANITE, 10, 0, 3, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(ANDESITE, 10, 0, 3, 5, 2, 1)));

//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(GRAVEL, 10, 0, 1500, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 150, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(DIORITE, 10, 0, 150, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(GRANITE, 10, 0, 150, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(ANDESITE, 10, 0, 150, 2, 2, 5)));

//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(GRAVEL, 10, 0, 400, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 32, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(DIORITE, 10, 0, 24, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(GRANITE, 10, 0, 24, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(ANDESITE, 10, 0, 24, 1, 1, 1)));

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = Util.Biomes.forBiomes("topography:infinite_dark");
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 6, biomeRegistry);
	
	return new ChunkGeneratorLayersFlat(biomeProvider, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed)
		.addLayers(1, 75, Util.Blocks.getState("minecraft:stone"))
			.addLayers(76, 80, Util.Blocks.getState("minecraft:cobblestone"))
				.addLayers(175, 179, Util.Blocks.getState("minecraft:cobblestone"))
					.addLayers(180, 254, Util.Blocks.getState("minecraft:stone"))
						.addLayers(0, 0, Util.Blocks.getState("minecraft:bedrock"))
							.addLayers(255, 255, Util.Blocks.getState("minecraft:bedrock"));
}
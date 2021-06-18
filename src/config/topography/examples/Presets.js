/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */



/*
 * Registers a preset.
 * This preset is meant to be an example of basic void dimensions as would be used in a skyblock.
 * The overworld has a simple tree spawn structure.
 * internal id, display name, image path, description
 */
registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with a starting structure")
/*
 * Registers the dimensions.
 * resource location, script path
 */
.registerDimension("overworld", "examples/dimensions/overworld_void")
.registerDimension("the_nether", "examples/dimensions/nether_void")
.registerDimension("the_end", "examples/dimensions/end_void")
/*
 * Registers a Forge event handler of type "BiomeLoadingEvent".
 * This event is where any modifications to biomes must be done.
 */
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
	accept: function(event) {
		/*
		 * Clears all feature generators
		 */
		Util.Features.clearFeatures(event);
		/*
		 * Clears all structure generators
		 */
		Util.Features.clearStructures(event);
	}
}).class);


/*
 * Registers a preset.
 * This preset is meant to show off "skylands" generation. A series of interconnected End style islands.
 * internal id, display name, image path, description
 */
registerPreset("skylands", "Skylands", "examples/images/Skylands", "Overworld with skylands generation")
/*
 * Registers the dimensions.
 * resource location, script path
 */
.registerDimension("overworld", "examples/dimensions/overworld_skylands")
/*
 * Registers a Forge event handler of type "BiomeLoadingEvent".
 * This event is where any modifications to biomes must be done.
 */
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
	accept: function(event) {
		/*
		 * Removes the mineshaft generator. Mineshafts do not generate well without consistent terrain.
		 */
		Util.Features.removeStructure(event, "mineshaft");
		/*
		 * Removes the "void_start_platform" feature. It creates a cobblestone platform in void biomes. Not something you would want in a regular world.
		 */
		Util.Features.removeFeature(event, "void_start_platform");
	}
}).class);


/*
 * Registers a preset.
 * This preset is meant to show off the Infinite Dark dimension, which is made in the style of the old Deep Dark.
 * internal id, display name, image path, description
 */
registerPreset("infinite_dark", "Infinite Dark", "examples/images/Infinite_Dark", "Normal worlds + the Infinite Dark dimension. Similar to the Deep Dark")
/*
 * Registers the dimension
 * resource location, script path
 */
.registerDimension("topography:infinite_dark", "examples/dimensions/infinite_dark")
/*
 * Registers a Forge event handler of type "BiomeLoadingEvent".
 * This event is where any modifications to biomes must be done.
 */
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
	accept: function(event) {
		/*
		 * Tests the name of the biome for the event so we only modify the custom one we use in the infinite dark dimension
		 */
		if (event.getName().toString().equals("topography:infinite_dark")) {
			/*
			 * Ores
			 * Vertical ore veins are used for a bit of flavor.
			 * block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
			 */
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:coal_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 16, 14, 50, 60, true, 2);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:iron_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 18, 12, 35, 45, true, 2);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:gold_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 5, 5, 15, true, 4);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:lapis_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 12, 5, 15, 25, true, 4);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:diamond_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 3, 1, 10, true, 4);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:redstone_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 6, 15, 25, true, 3);
			});
			
			Util.Features.Ores.addOre(event, function() {
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:emerald_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 3, 1, 10, true, 4);
			});
			/*
			 * Holes
			 * Uses a vanilla ore vein of air in the surface cobblestone layers to create inconvenient holes which break up the terrain
			 * block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
			 */
            var BlockStateMatchRuleTest = Java.type("net.minecraft.world.gen.feature.template.BlockStateMatchRuleTest");

            Util.Features.Ores.addOre(event, function() {
                return Util.Features.Ores.buildOre(Util.Blocks.getState("minecraft:air"), new BlockStateMatchRuleTest(Util.Blocks.getState("minecraft:cobblestone")), 20, 16, 78, 81, true, 2);
            });
            
            /*
             * Adds spawns to the biome, as it does not have any default ones
             */
            var EntityClassification = Java.type("net.minecraft.entity.EntityClassification");
			var Spawners = Java.type("net.minecraft.world.biome.MobSpawnInfo.Spawners");
			
			/*
			 * Hostiles
			 * entity, weight, min group, max group
			 */
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:creeper")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:drowned")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:enderman")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:husk")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:skeleton")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:spider")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:stray")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:witch")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie_villager")), 10, 1, 3));
		}
	}
}).class)
/*
 * Registers a Forge event handler of type "FogColors".
 * This event is used for modifying fog colors.
 * This is entirely client side, EventSide.CLIENT is used to stop the event handler from trying to run on servers and causing issues.
 */
.registerEventHandler("FogColors", EventSide.CLIENT, Java.extend(Consumer, {
	accept: function(event) {
		/*
		 * Tests the current client world to ensure this only modifies fog in the infinite_dark dimension
		 */
		if (Util.Worlds.test(Util.Client.getWorld(), "topography:infinite_dark")) {
			event.setRed(0);
			event.setGreen(0);
			event.setBlue(0);
		}
	}
}).class)
/*
 * Registers a Forge event handler of type "SpecialSpawn".
 * This event is fired when entities are spawned.
 * EventSide.SERVER is used since we do not want modifications happening client side, as it may cause desync.
 */
.registerEventHandler("SpecialSpawn", EventSide.SERVER, Java.extend(Consumer, {
	accept: function(event) {
		var Operation = Java.type("net.minecraft.entity.ai.attributes.AttributeModifier.Operation");
		var PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");
		/*
		 * Ensures we only modify entities which are spawned in the infinite_dark dimension which are not players.
		 */
		if (Util.Worlds.test(event.getWorld(), "topography:infinite_dark") && !(event.getEntity() instanceof PlayerEntity)) {
			/*
			 * Doubles the max health and attack damage of entities, then heals them to full.
			 */
			Util.Entities.modifyAttribute(event.getEntity(), "minecraft:generic.attack_damage", "dark_power", 1.0, Operation.MULTIPLY_TOTAL);
			Util.Entities.modifyAttribute(event.getEntity(), "minecraft:generic.max_health", "dark_resilience", 1.0, Operation.MULTIPLY_TOTAL);
			Util.Entities.healToMax(event.getEntityLiving());
		}
	}
}).class)
/*
 * Registers a Forge event handler of type "SpecialSpawn".
 * This event fires when any living entity updates.
 * EventSide.SERVER is used since we do not want modifications happening client side, as it may cause desync.
 */
.registerEventHandler("LivingUpdateEvent", EventSide.SERVER, Java.extend(Consumer, {
	accept: function(event) {
		var PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");
		var entity = event.getEntityLiving();
		/*
		 * Tests to ensure the entity is in the infinite_dark dimension, is a player, and is not in creative or spectator mode.
		 */
		if (Util.Worlds.test(Util.Entities.getWorld(entity), "topography:infinite_dark") && entity instanceof PlayerEntity && !Util.Players.getGamemodeName(entity).equals("CREATIVE") && !Util.Players.getGamemodeName(entity).equals("SPECTATOR")) {
			/*
			 * Makes sure effects are only updated every 1 second
			 */
			if (Util.Worlds.getGameTime(Util.Entities.getWorld(entity)) % 20 == 0) {
				/*
				 * Tests light level at the players location, then applies potion effects based on whether the player is in darkness or light
				 * entity, effect, duration, amplification, ambient, particles
				 */
				var light = Util.Entities.getLight(entity);
				
				if (light == 0) {
					Util.Effects.addPotion(entity, "minecraft:slowness", 40, 1, false, false);
					Util.Effects.addPotion(entity, "minecraft:weakness", 40, 1, false, false);
					Util.Effects.addPotion(entity, "minecraft:blindness", 40, 0, false, false);
				} else {
					Util.Effects.addPotion(entity, "minecraft:speed", 40, 0, false, false);
					Util.Effects.addPotion(entity, "minecraft:resistance", 40, 0, false, false);
				}
			}
		}
	}
}).class);

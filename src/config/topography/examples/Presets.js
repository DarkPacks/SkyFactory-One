/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_void")//Registers script "overworld_void" to be used for generating dimension "overworld"
.registerDimension("the_nether", "examples/dimensions/nether_void")//Registers script "nether_void" to be used for generating dimension "nether"
.registerDimension("the_end", "examples/dimensions/end_void")//Registers script "end_void" to be used for generating dimension "end"
.registerDimension("topography:infinite_dark", "examples/dimensions/infinite_dark")
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.clearFeatures(event);//Clears all feature generators
		//FeatureHelper.clearStructures(event);//Clears all structure generators

        //event, structure resource location
        FeatureHelper.removeStructure(event, "buried_treasure");
        FeatureHelper.removeStructure(event, "desert_pyramid");
        FeatureHelper.removeStructure(event, "endcity");
        //FeatureHelper.removeStructure(event, "bastion_remnant");
        //FeatureHelper.removeStructure(event, "fortress");
        FeatureHelper.removeStructure(event, "fossil");
        FeatureHelper.removeStructure(event, "igloo");
        FeatureHelper.removeStructure(event, "jungle_pyramid");
        FeatureHelper.removeStructure(event, "mansion");
        FeatureHelper.removeStructure(event, "mineshaft");
        FeatureHelper.removeStructure(event, "monument");
        //FeatureHelper.removeStructure(event, "nether_fossil");
        FeatureHelper.removeStructure(event, "ocean_ruin");
        FeatureHelper.removeStructure(event, "pillager_outpost");
        FeatureHelper.removeStructure(event, "ruined_portal");
        FeatureHelper.removeStructure(event, "shipwreck");
        FeatureHelper.removeStructure(event, "stronghold");
        FeatureHelper.removeStructure(event, "swamp_hut");
        FeatureHelper.removeStructure(event, "underwater_ruin");
        FeatureHelper.removeStructure(event, "village");
        FeatureHelper.removeStructure(event, "woodland_mansion");
        FeatureHelper.removeFeature(event, "void_start_platform");

        if (BiomeHelper.test(event.getName(), BiomeDictionary.Type.OVERWORLD)) {
			var EntityClassification = Java.type("net.minecraft.entity.EntityClassification");
			var Spawners = Java.type("net.minecraft.world.biome.MobSpawnInfo.Spawners");
			
			event.getSpawns().getSpawner(EntityClassification.WATER_AMBIENT).clear();
			event.getSpawns().getSpawner(EntityClassification.WATER_CREATURE).clear();
			event.getSpawns().getSpawner(EntityClassification.CREATURE).clear();
			event.getSpawns().getSpawner(EntityClassification.AMBIENT).clear();
			event.getSpawns().getSpawner(EntityClassification.MONSTER).clear();
			
			//Water ambients weight, min group, max group
			event.getSpawns().func_242575_a(EntityClassification.WATER_CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:squid")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:salmon")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cod")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:tropical_fish")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:dolphin")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pufferfish")), 10, 1, 4));
			
			//Land ambients
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:sheep")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pig")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cow")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:chicken")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:horse")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:donkey")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:polar_bear")), 10, 1, 4));
			//event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:bee")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cat")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:fox")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:llama")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:mule")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:mooshrooom")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:ocelot")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:panda")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:parrot")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:rabbit")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:skeleton_horse")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:turtle")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:wolf")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie_horse")), 10, 1, 4));
			
			//Air ambients
			event.getSpawns().func_242575_a(EntityClassification.AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:bat")), 10, 1, 4));
			
			//Hostiles
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cave_spider")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:creeper")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:drowned")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:elder_guardian")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:enderman")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:evoker")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:guardian")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:husk")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:illusioner")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:phantom")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pillager")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:ravager")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:silverfish")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:skeleton")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:slime")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:spider")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:stray")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:vindicator")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:witch")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie_villager")), 10, 1, 3));
			
			/*
			Entities which aren't added:
			villager
			wandering_trader
			vex
			*/
		}
		if (event.getName().toString().equals("topography:infinite_dark")) {
			////           
			////
			//Vanilla Ore
			////
			////
			//Coal Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:coal_ore"), OreHelper.BASE_STONE_OVERWORLD, 20, 14, 35, 60, true, 2);
			});          
			//Iron Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:iron_ore"), OreHelper.BASE_STONE_OVERWORLD, 22, 12, 45, 60, true, 2);
			});                      
			//Gold Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:gold_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 5, 1, 35, true, 4);
			});
			//Lapis Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:lapis_ore"), OreHelper.BASE_STONE_OVERWORLD, 16, 5, 1, 45, true, 4);
			});
			//Diamond Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:diamond_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 3, 1, 20, true, 4);
			});
			//Redstone Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:redstone_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 6, 1, 45, true, 3);
			});
			//Emerald Ore that's better than TP
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:emerald_ore"), OreHelper.BASE_STONE_OVERWORLD, 12, 3, 1, 20, true, 4);
			});


			////
			////
			//Modded Ores
			////
			////

			//Dimensional Shard
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("rftoolsbase:dimensionalshard_overworld"), OreHelper.BASE_STONE_OVERWORLD, 20, 3, 1, 45, true, 4);
			});
			//prosperity_ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("mysticalagriculture:prosperity_ore"), OreHelper.BASE_STONE_OVERWORLD, 12, 3, 1, 45, true, 4);
			});
			//inferium_ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("mysticalagriculture:inferium_ore"), OreHelper.BASE_STONE_OVERWORLD, 18, 10, 20, 55, true, 2);
			});
        	//power_ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("forcecraft:power_ore"), OreHelper.BASE_STONE_OVERWORLD, 18, 10, 40, 60, true, 2);
			});

			////
			////
			//Thermal Ores
			////
			////
	
			//thermal:apatite_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:apatite_ore"), OreHelper.BASE_STONE_OVERWORLD, 18, 8, 27, 60, true, 4);
			});
			//thermal:cinnabar_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:cinnabar_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 8, 27, 60, true, 4);
			});
			//thermal:niter_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:niter_ore"), OreHelper.BASE_STONE_OVERWORLD, 11, 8, 20, 60, true, 4);
			});
			//thermal:sulfur_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:sulfur_ore"), OreHelper.BASE_STONE_OVERWORLD, 11, 8, 20, 60, true, 4);
			});
			//thermal:copper_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:copper_ore"), OreHelper.BASE_STONE_OVERWORLD, 18, 10, 20, 60, true, 2);
			});
			//thermal:tin_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:tin_ore"), OreHelper.BASE_STONE_OVERWORLD, 12, 9, 40, 60, true, 2);
			});
			//thermal:lead_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:lead_ore"), OreHelper.BASE_STONE_OVERWORLD, 10, 8, 30, 60, true, 3);
			});
			//thermal:silver_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:silver_ore"), OreHelper.BASE_STONE_OVERWORLD, 10, 5, 45, 60, true, 4);
			});
			//thermal:nickel_ore Ore
			OreHelper.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:nickel_ore"), OreHelper.BASE_STONE_OVERWORLD, 16, 10, 40, 60, true, 3);
			});
			
			////
			////
			//Holes
			////
			////

            var BlockStateMatchRuleTest = Java.type("net.minecraft.world.gen.feature.template.BlockStateMatchRuleTest");

            OreHelper.addOre(event, function() {
                //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
                return OreHelper.buildOre(BlockHelper.getState("minecraft:air"), new BlockStateMatchRuleTest(BlockHelper.getState("minecraft:cobblestone")), 20, 16, 78, 81, true, 2);
            });
		}
	}
}).class)
.registerEventHandler("CheckSpawn", Java.extend(Consumer, {//Registers a Forge event handler of type "CheckSpawn" 
	accept: function(event) {
		var Result = Java.type("net.minecraftforge.eventbus.api.Event.Result");
		
		//Restrict all water creatures to spawning in 2 deep full water blocks
		var restrictToTwoBlocksWater = Java.to(
			[
				"minecraft:dolphin",
				"minecraft:squid",
				"minecraft:salmon",
				"minecraft:cod",
				"minecraft:tropical_fish",
				"minecraft:pufferfish"
			],
			"java.lang.String[]"
		);
		
		if (WorldHelper.test(event.getWorld(), "minecraft:overworld")) {
			for (i = 0; i < restrictToTwoBlocksWater.length; i++) {
				if (EntityHelper.test(event.getEntityLiving(), restrictToTwoBlocksWater[i])) {
					//Allow squid in bubble columns
					if (WorldHelper.getState(event.getWorld(), event.getX(), event.getY(), event.getZ()) == BlockHelper.getState("minecraft:bubble_column") && EntityHelper.test(event.getEntityLiving(), "minecraft:squid")) {
						return;
					}
					//Block spawns which aren't in water
					if (WorldHelper.getState(event.getWorld(), event.getX(), event.getY(), event.getZ()) != BlockHelper.getState("minecraft:water")) {
						event.setResult(Result.DENY);
						return;
					}
					//Block spawns which do not have water either above or blow
					if (WorldHelper.getState(event.getWorld(), event.getX(), event.getY() - 1, event.getZ()) != BlockHelper.getState("minecraft:water")
							&& WorldHelper.getState(event.getWorld(), event.getX(), event.getY() + 1, event.getZ()) != BlockHelper.getState("minecraft:water")) {
						event.setResult(Result.DENY);
						return;
					}
					return;
				}
			}
		}
	}
}).class)
.registerEventHandler("FogColors", Java.extend(Consumer, {
	accept: function(event) {
		if (WorldHelper.test(Util.Client.getWorld(), "topography:infinite_dark")) {
			event.setRed(0);
			event.setGreen(0);
			event.setBlue(0);
		}
	}
}).class);

registerPreset("skylands", "Skylands", "examples/images/Basic_Tree", "Overworld with skylands generation")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_skylands")//Registers script "overworld_skylands" to be used for generating dimension "overworld"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.removeStructure(event, "mineshaft");//Removes mineshafts. They don't generate very well
		FeatureHelper.removeFeature(event, "void_start_platform");//Removes a strange void biome feature
	}
}).class);

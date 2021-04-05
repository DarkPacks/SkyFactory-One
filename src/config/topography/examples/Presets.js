/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_void")//Registers script "overworld_void" to be used for generating dimension "overworld"
.registerDimension("the_nether", "examples/dimensions/nether_void")//Registers script "nether_void" to be used for generating dimension "nether"
.registerDimension("the_end", "examples/dimensions/end_void")//Registers script "end_void" to be used for generating dimension "end"
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
}).class);

registerPreset("skylands", "Skylands", "examples/images/Basic_Tree", "Overworld with skylands generation")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_skylands")//Registers script "overworld_skylands" to be used for generating dimension "overworld"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.removeStructure(event, "mineshaft");//Removes mineshafts. They don't generate very well
		FeatureHelper.removeFeature(event, "void_start_platform");//Removes a strange void biome feature
	}
}).class);


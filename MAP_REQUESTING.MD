# How to Request Maps

This document outlines the process for requesting maps on the webmap. I recommend reading it in its entirety before you make a request, as there is some preparation which can greatly speed up the process if you actually do it.

It is much preferred if your server maintainers/headcoder asks for the maps as they will actually know the intricacies of how your server stuff is laid out.

---

## Preparation

1. Ensure your codebase actually works with the webmap

The webmap backend renders its maps using [dmm-tools](https://github.com/Spacemaniac/SpacemanDMM). The parser for this is not the same as the regular DM parser, and you may need to tweak your code to have it be webmap compatible. Examples of this are using non-string keys inside maps. For example, you would have to replace `id = mything` with `id = "mything"` inside your codebase. **It is your job as a codebase maintainer to make your code compatible with the map rendering system. I am not going to take time out of my day to do it for you.**

---

2. Help! My map looks bad!

If your codebase is not forked from modern TG, your maps may look less than good on the renderer. Examples of this can include:

- Mis-layered typepaths (Pipes showing in hallways when they shouldn't)
- Objects such as spawners not
- Bad icon smoothing
- Cables not rendering if you do not use smart cables

The map renderer is configurable with a `SpacemanDMM.toml` file in your repository root folder. An example file from ParadiseSS13 is below

```toml
[map_renderer]
# Objects inside this list will never render
hide_invisible = [
"/obj/effect/landmark",
"/obj/effect/mapping_helpers",
"/obj/effect/spawner/random_barrier",
"/obj/effect/spawner/random_spawners",
]

[map_renderer.fancy_layers]
# This section allows for layer overrides on typepaths
# Layer -10
"/turf/simulated/floor/plating" = -10
"/turf/space" = -10
# Layer -2
"/turf/simulated/floor/bluegrid" = -2
"/turf/simulated/floor/carpet" = -2
"/turf/simulated/floor/engine" = -2
"/turf/simulated/floor/plasteel" = -2
"/turf/simulated/floor/wood" = -2
"/turf/simulated/wall" = -2

[map_renderer.render_passes]
# This section allows you to configure the various render passes
# You can force enable or disable them to make your map render better
icon-smoothing = false
icon-smoothing-2016 = true
smart-cables = false
```

The renderer is highly configurable, but again, **the responsibility for making your maps render properly is on you, the requester. If your codebase does not render maps in a clean way, that is your problem, not mine.**

---

3. Plan what maps you want and what group they go in

You **need** to plan ahead of time what `.dmm` files need to go into what map viewers. If you have a standard station, it is likely that your `station.dmm` file will be in its own webmap page. However, if you have a multi-Z station, you **must** specify that multiple `.dmm` files will go into the same map page, as well as specifying the names of these layers (eg: `station_1.dmm` should be called "Layer 1" on the map "Station Name", and `station_2.dmm` should be called "Under Layer" on the map "Station Name". If I have to ask you what maps go where, I won't be happy.

---

## Requesting A Map

Now that you have prepared your codebase for the webmap, you can start the request process.

1. If you are not already inside the coderbus discord, join it at [https://discord.gg/Vh8TJp9](https://discord.gg/Vh8TJp9), and go through the standard join process listed inside *#welcome*.

2. Once you have roles (if you didn't already), create a thread from *#tooling-questions*, either public or private, just make sure to add me (`affectedarc#5359`), then ping me with this format:

---

**Server Name:** Your server here

**Server Git URL:** Link to your server GitHub repository (GitLab and others are **NOT** accepted)

**Maps:** List out your maps and the DMM files required for each layer.

__Station name:__

Layer Name: `path/to/your/file.dmm`

Layer 2 Name: `path/to/your/other/file.dmm`

__Other Map Name:__

Layer 1 Name: `path/to/some/other/map/file.dmm`

*etc*

### Failure to use this format will result in your request being ignored

---

3. Give me a bit to contact you back about the request, and then I can work details out. However, please bear in mind these important things:

- If you skipped the preparation step, and your code does not render maps out of the gate, I will be less inclined and may straight up decline your map request.
- I do **NOT** respond to discord DMs. Harassing me via them to look at your map request will have your request met with a decline. Please use pings.

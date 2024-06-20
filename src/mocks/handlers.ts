import { rest } from 'msw'

export const citaPersonaje = [
    {
        quote: "Back in Edinburg, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!",
        character: "Lisa Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063",
        characterDirection: "Right"
    }
]

export const citaRandom = [
    {
        quote: "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
        character: "Homer Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right"
    }
]

export const handlers = [
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {

        const character = req.url.searchParams.get("character") ?? "";
        console.log('handler')
        if (character == "Lisa") {
            return res(
                ctx.status(200),
                ctx.json(citaPersonaje)
            );
        }

        return res(
            ctx.status(200),
            ctx.json(citaRandom)
        );
    })
]
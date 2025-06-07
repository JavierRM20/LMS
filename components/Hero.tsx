import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className=" flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Convierte en <br/>
                un Desarrollador {" "}
                <span className="bg-gradient bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Full Stack
                </span>
                <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                    Aprende a construir aplicaciones web completas con las últimas tecnologías.
                </p>
                <div className="flex flex-col justify-center pt-5 gap-4 sm:flex-row">
                    <Button variant="default" className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                        Ver Cursos
                    </Button>
                </div>
            </h1>
        </section>
    );
}
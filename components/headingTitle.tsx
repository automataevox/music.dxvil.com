export default function HeadingTitle() {
    return(
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Musician. </span><br className="inline" />
            Artist with a soul.
          </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Future, madness or love? I am addicted to music in every way.
            </p>
        </div>
    )
}
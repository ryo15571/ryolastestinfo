import React from "react";
import ReactTypingEffect from "react-typing-effect";

const FavSong = () => {
    return (
        <div>
        <div className='text-center font-bold text-3xl text-gray-700 pt-28'>
<ReactTypingEffect text={["เพลงโปรด","FavSong"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700" />
</div>
        <div className="w-full py-8">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <iframe width="320" height="320" className="my-8" src="https://www.youtube.com/embed/cg93Z3si7iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="320" height="320" className="my-8" src="https://www.youtube.com/embed/fAKzMnoh-n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        </div>
    )
}

export default FavSong
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import featured from "@assets/presentacio_2024.webp";
import { Link } from "react-router";

interface NewsItem {
    id: number;
    title: string;
    image: string;
    content: string;
    date: string;
}

const newsData: NewsItem[] = [
    {
        id: 23,
        title: "Nova normativa bàsquet base",
        image: "",
        content:
            "Aquesta temporada 2023-2024 entra en vigor la nova normativa de bàsquet base. Consulta-la a la pàgina de la FCBQ.",
        date: "2023-09-18",
    },
    {
        id: 24,
        title: "Notícia 2",
        image: "path/to/image2.jpg",
        content: "Contingut de la notícia 2...",
        date: "2023-09-19",
    },
    // Add more news items here
];

function NewsCarousel() {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        // Fetch news data from an API or use static data
        setNews(newsData);
    }, []);

    return (
        <div className="relative w-full  mt-6 py-10">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={5000}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-600 z-10"
                            style={{ marginLeft: "-50px" }}
                        >
                            &#9664;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-600 z-10"
                            style={{ marginRight: "-50px" }}
                        >
                            &#9654;
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index) => (
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300  mt-5 ${
                            isSelected ? "bg-red-600 scale-125" : "bg-gray-400"
                        }`}
                        onClick={onClickHandler}
                        key={index}
                    />
                )}
                className="relative z-0"
            >
                {news.map((item) => (
                    <Link to={`/noticies/${item.id}`} key={item.id} className="block relative z-10">
                        <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
                            <img
                                src={item.image || featured}
                                alt={item.title}
                                className="w-full h-60 object-cover rounded-lg shadow-md"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-zinc-800 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                                <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
                                    {item.content.length > 150
                                        ? `${item.content.substring(0, 150)}...`
                                        : item.content}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;

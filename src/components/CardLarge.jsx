import React from "react";

export function CardLarge(props) {
    return (
        <a href="#"
           className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                 src={props.img} alt={props.img} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.content}</p>
                    <ul>
                        <li>{props.tag[0]}</li>
                        <li>{props.tag[1]}</li>
                        <li>{props.tag[2]}</li>
                        <li>{props.tag[3]}</li>
                    </ul>
                </div>
        </a>
    )
}
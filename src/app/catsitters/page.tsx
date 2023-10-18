"use client"

import {IReview} from "@/class/Review";
import {IUser} from "@/class/User";
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"
import {useEffect, useState} from "react"
import {useAppContext} from "../context/app";


export default function Page() {
    const {setFetching} = useAppContext()
    const [catsitters, setCatSitters] = useState<IUser[]>([])
    const [reviews, setReviews] = useState<IReview[]>([])

    async function fetchCatSittersData() {
        const response = await fetch("/api/user/getall/catsitter")
        setCatSitters(await response.json())
    }
    async function fetchReviews() {

    }

    useEffect(() => {
        setFetching(true)
        fetchCatSittersData()
        setFetching(false)
    }, [])

    return (
        <div className="bg-[var(--white-cream)] ">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]">พี่เลี้ยงของเรา</h1>
                <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]">
                {/* <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:w-[1200px] w-fit pb-[100px]"> */}
                    {catsitters.length > 0 ? (
                        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 lg:w-[1200px] w-fit pb-[100px]">
                            {catsitters.map((catsitter: IUser, i) => (
                                <CardCatSitter reviews={reviews} submitCatSitter={null} key={`catsitter${catsitter.id}`} catsitter={catsitter} color={i} isButton={false}/>
                            ))}
                        </div>
                    ) : catsitters.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}
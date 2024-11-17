
"use client";

import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function CoinRates() {
    const API_KEY = "68bc7a8c28142955fcc41949a2d83e2f";
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
            .then((response) => response.json())
            .then((jsonConverted) => {
                setData(jsonConverted);
            });
    }, []);

    return (
        <div className="relative w-full h-screen">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 blur-[5px] w-full h-full object-cover"
            >
                <source src="/bitcoin-cryptocurrency.1920x1080.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-white font-bold mt-10">CRYPTO RATES</h1>
                <Table className="w-[25%] mx-auto p-5 md:my-64 my-32 bg-blue-300 bg-opacity-80 rounded-lg shadow-md">
                    <TableHeader className="text-center text-xl text-blackk">
                        <TableRow>
                            <TableHead className="w-[100px]">Coin</TableHead>
                            <TableHead>Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Bitcoin</TableCell>
                            <TableCell>{data?.rates?.BTC}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Ethereum</TableCell>
                            <TableCell>{data?.rates?.ETH}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Cardano</TableCell>
                            <TableCell>{data?.rates?.ADA}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Solana</TableCell>
                            <TableCell>{data?.rates?.SOL}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">RIPPLE</TableCell>
                            <TableCell>{data?.rates?.XRP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Litecoin</TableCell>
                            <TableCell>{data?.rates?.LTC}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">AVALANCHE</TableCell>
                            <TableCell>{data?.rates?.AVAX}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Binance</TableCell>
                            <TableCell>{data?.rates?.BNB}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

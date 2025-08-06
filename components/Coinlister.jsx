import React from "react";
import Header from "./Header";
import Image from "next/image";

const CoinLister = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <Header title="CoinLister - AI Listing Automation" />
            </div>

            {/* Smaller screen content (< xl) - A single column flow */}
            <div className="flex xl:hidden flex-col mt-4 items-center gap-y-8">
                <p className="brand-text-color mx-auto">
                    Coin collecting has been a passion of mine since I was five years old.
                    To turn this hobby into a business, I developed CoinLister, a tool to
                    solve the most time-consuming part of selling online: creating listings.
                    <br />
                    <br />
                    I built this full-stack MVP in six weeks with a Java Spring Boot backend and a React frontend. It successfully reduced my listing time from 15 minutes per item down to approximately 3 minutes, including photography.
                </p>

                {/* Image Progression Showcase */}
                <div className="w-full flex flex-col items-center gap-y-4">
                    <Image
                        src="/assets/projects/coinlister/indian_obv_uncropped.jpg"
                        alt="Original uncropped coin image"
                        width={280}
                        height={280}
                        className="w-[280px] h-auto rounded-md"
                    />
                    <Image
                        src="/assets/projects/coinlister/indian_bounding_box.jpg"
                        alt="Google Vision API generated bounding box"
                        width={280}
                        height={280}
                        className="w-[280px] h-auto rounded-md"
                    />
                    <Image
                        src="/assets/projects/coinlister/indian_obv_cropped.jpg"
                        alt="Final auto-cropped coin image"
                        width={280}
                        height={280}
                        className="w-[280px] h-auto rounded-md"
                    />
                    <p className="brand-caption brand-text-color text-center max-w-[280px]">
                        <strong>Fig. 1</strong> The image pipeline: original photo, AI bounding
                        box detection, and the final cropped result.
                    </p>
                </div>

                <p className="brand-text-color mx-auto">
                    The backend uses the Google Vision API for intelligent cropping and OpenAI for description generation. It then connects to the eBay Developer API to publish listings automatically. All credentials and API keys are securely managed using Google Secret Manager.
                </p>

                {/* App Screenshots - Combined Image */}
                <div className="w-full flex flex-col items-center gap-y-2">
                    <Image
                        src="/assets/projects/coinlister/app-to-ebay-flow.png"
                        alt="A combined image showing the app confirmation screen on the left and the final eBay listing on the right"
                        width={1080}
                        height={597}
                        className="w-full max-w-md h-auto rounded-lg border"
                    />
                    <p className="brand-caption brand-text-color text-center max-w-md px-4">
                        <strong>Fig. 2</strong> The app's confirmation screen (left) and the resulting live eBay listing (right).
                    </p>
                </div>
            </div>

            {/* Extra large screen content (xl:) - Redesigned multi-column layout */}
            <div className="hidden xl:block mt-8">
                {/* SECTION 1: Main Description and App Screenshots */}
                <div className="grid grid-cols-5 gap-x-12">
                    {/* Left Column: Text */}
                    <div className="col-span-3 flex flex-col gap-y-4 brand-text-color">
                        <p>
                            Coin collecting has been a passion of mine since I was five years old.
                            To turn this hobby into a business, I developed CoinLister, a tool to
                            solve the most time-consuming part of selling online: creating listings.
                        </p>
                        <p>
                            I built this full-stack MVP in six weeks with a Java Spring Boot backend and a React frontend.
                            This application streamlined my entire workflow, reducing the listing time from 15 minutes per item down to approximately 3 minutes, including photography.
                        </p>
                        <p>
                            The tool connects to the eBay Developer API to publish listings
                            automatically—the most challenging part of the project was navigating
                            its complex documentation. The application is hosted on Google Cloud Platform, utilizing a serverless architecture with Cloud Run, Firestore, and Storage. This design is highly efficient, with total operational costs under $1 per month. All credentials are securely stored using Google Secret Manager.
                        </p>
                        <p>
                            I am now developing version 2.0 with an Angular frontend, expanding it into a complete
                            inventory management system with profit/loss reporting and value estimation.
                        </p>
                    </div>

                    {/* Right Column: Combined App Screenshot */}
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <Image
                            src="/assets/projects/coinlister/app-to-ebay-flow.png"
                            alt="A combined image showing the app confirmation screen on the left and the final eBay listing on the right"
                            width={1080}
                            height={597}
                            className="w-full h-auto rounded-lg border shadow-md"
                        />
                        <p className="brand-caption brand-text-color mt-3 text-center px-4">
                            The application's confirmation UI (left) and the final, live eBay listing it generated (right).
                        </p>
                    </div>
                </div>

                {/* SECTION 2: AI Image Processing Showcase */}
                <div className="mt-16">
                    <h3 className="text-center text-xl font-semibold brand-text-color mb-4">
                        AI-Powered Image Processing
                    </h3>
                    <div className="grid grid-cols-3 gap-x-6">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/projects/coinlister/indian_obv_uncropped.jpg"
                                alt="Original uncropped coin image"
                                width={300}
                                height={300}
                                className="w-full h-auto rounded-md"
                            />
                            <p className="brand-caption brand-text-color mt-2"><strong>1.</strong> Original Photo</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/projects/coinlister/indian_bounding_box.jpg"
                                alt="Google Vision API generated bounding box"
                                width={300}
                                height={300}
                                className="w-full h-auto rounded-md"
                            />
                            <p className="brand-caption brand-text-color mt-2"><strong>2.</strong> Bounding Box Detection</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/projects/coinlister/indian_obv_cropped.jpg"
                                alt="Final auto-cropped coin image"
                                width={300}
                                height={300}
                                className="w-full h-auto rounded-md"
                            />
                            <p className="brand-caption brand-text-color mt-2"><strong>3.</strong> Final Cropped Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoinLister;
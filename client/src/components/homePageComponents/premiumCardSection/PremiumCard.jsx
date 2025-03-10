import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../../../shared/SectionTitle";
import { useState } from "react";

const PremiumCard = () => {
  const axiosPublic = UseAxiosPublic();
  const [sort, setSort] = useState("");

  const { data: premiumData, isLoading } = useQuery({
    queryKey: ["premiumBiodata", sort],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/premium-biodata?sort=${sort}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-600 py-10">
      <div className="w-4/5 mx-auto py-16">
        <div className="text-white pb-10">
          <SectionTitle
            heading={"Premium User"}
            subHeading={
              "Unlock exclusive benefits crafted just for premium members!"
            }
          ></SectionTitle>
        </div>
        <div className="flex justify-end my-5">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="md:py-3 md:px-2 px-1 py-1 btext-xs md:text-base border rounded-md bg-gray-700 text-white"
          >
            <option value="">Sort By Age</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <Swiper
          slidesPerView={1} // Default for smaller screens
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4, // 3 slides for screens >= 768px (md breakpoint)
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {premiumData.map((data, index) => (
              <SwiperSlide key={index}>
                <Card data={data}></Card>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PremiumCard;

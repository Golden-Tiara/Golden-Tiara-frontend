<template>
  <div class="max-w-7xl mx-auto px-10">
    <!-- Card 1 -->
    <div class="flex justify-center mt-10">
      <div
        class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12 "
      >
        <img
          class="object-cover w-auto rounded h-4/5 md:h-auto md:w-[500px] md:rounded-none md:rounded-l-lg"
          src="@/assets/images/G00.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
          <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900">
            G00
          </h5>
          <p class="mb-3 font-bold text-gray-700 text-base ">
            เลขสัญญาตรวจสอบทอง: 100
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขจำนำทอง: 100
          </p>
          <p class="mb-3 font-normal text-base text-gray-700 mr-5">
            น้ำหนักทอง: 2 บาท
          </p>

          <p class="mb-3 font-normal text-gray-700 text-base">
            ความบริสุทธ์: 99%
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            คำอธิบาย: ทองเก่ารับซื้อจากลูกค้า
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base mr-5">
            ราคาปัจจุบัน:
            <span class="mb-3 font-normal text-green-500">60000</span> บาท
          </p>

          <p class="mb-3 font-normal text-gray-700 text-base">
            สถานะ:
            <span
              class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
            >
              อยู่ระหว่างตรวจสอบ</span
            >
          </p>
          <div class="flex mt-8">
            <button
              type="button"
              class="text-white bg-green-600 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-5"
            >
              ตรวจสอบผ่าน
            </button>
            <button
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center"
            >
              ตรวจสอบไม่ผ่าน
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Card 1 -->
  </div>
</template>

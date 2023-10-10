<template>
    <div class="container px-5 py-24 mx-auto">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        เลขบัตรประชาชนลูกค้า
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="customer-id"
        type="text"
      />
  
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        เลขสัญญาตรวจสอบ
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="contract-id"
        type="text"
      />
      <div class="flex justify-end mt-5">
        <button
          type="button"
          class="text-white bg-[#122345] hover:bg-[#122345]/80 focus:ring-4 focus:outline-none focus:ring-[#122345]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#122345]/80 dark:focus:ring-[#122345/40 mr-2 mb-2]"
        >
          คำนวณราคาและดอกเบี้ย
        </button>
      </div>
    </div>
  </template>
  
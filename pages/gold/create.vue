<template>
  <div
    class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
  >
    <div
      class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
      style="max-width: 1000px"
    >
      <div class="md:flex w-full">
        <div class="hidden md:block w-1/2 bg-indigo-500 px-10">
          <div class="container max-h-80 mx-auto items-center py-32">
            
            <!-- มีข้อมูล -->
            <section
              v-if="previewUrl"
              class="mx-auto bg-white rounded-lg shadow-md items-center -mt-20"
            >
              <div class="px-4 py-8">
                รูปตัวอย่าง

                <div
                  class="max-w-sm mb-3 py-2 bg-gray-100 border-dashed border-2 border-gold rounded-lg items-center mx-auto text-center cursor-pointer"
                >
                  <div class="flex items-center justify-center">
                    <img 
                      :src="previewUrl"
                      class="max-h-60 px-auto w-60 object-cover"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-center">
                  <div class="w-full flex items-center">
                    <label class="cursor-pointer">
                      <span
                        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
                        >เลือกรูป</span
                      >
                      <input
                        type="file"
                        class="hidden"
                        accept="image/*"
                        @change="previewImage"
                      />
                    </label>
                    <div v-if="selectedFile" class="ml-3 text-sm text-gray-700">
                      {{ selectedFile.name }}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- ไม่มีรูป -->
            <section
              v-else
              class="mx-auto bg-white rounded-lg shadow-md items-center -mt-20"
            >
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-96 border-2 border-gold border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800  hover:bg-gray-100 "
                  @dragover.prevent="dragOver"
                  @dragleave.prevent="dragLeave"
                  @drop.prevent="dropImage"
                  ref="dropzone"
                >
                  <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                  >
                    <svg
                      class="w-12 h-12 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                  </div>
                  <label class="mb-4 cursor-pointer">
                    <span
                      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full"
                      >เลือกรูป</span
                    >
                    <input
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="previewImage"
                    />
                  </label>
                </label>
              </div>
            </section>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">เพิ่มรายการทอง</h1>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1"
                  >น้ำหนัก(บาท)</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    class="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1"
                  >ความบริสุทธิ์</label
                >
                <div class="flex mb-20">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    class="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button
                  class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  บันทึกรายการ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewUrl: null,
      selectedFile: null,
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.previewUrl = reader.result;
          this.selectedFile = file; // Store the selected file
        };

        reader.readAsDataURL(file);
      }
    },
    dragOver(event) {
      event.preventDefault();
      this.$refs.dropzone.classList.add("border-blue-500");
    },

    dragLeave() {
      this.$refs.dropzone.classList.remove("border-blue-500");
    },

    dropImage(event) {
      event.preventDefault();
      this.$refs.dropzone.classList.remove("border-blue-500");

      const file = event.dataTransfer.files[0];
      this.previewUrl = null; // เคลียร์รูปเก่า
      this.selectedFile = null; // เคลียร์ไฟล์ที่ถูกเลือก
      this.previewFile(file);
    },
    previewFile(file) {
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.previewUrl = reader.result;
          this.selectedFile = file; // Store the selected file
        };

        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

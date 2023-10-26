<template>
  <div id="home" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card card-body">
          <div class="form-group">
            <input
              type="text"
              id="name"
              v-model="name"
              class="form-control"
              placeholder="Enter name here"
            />
          </div>
          <div ref="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              aliquam. Aperiam blanditiis provident quo autem consequuntur
              aliquam nesciunt neque aliquid, aut quaerat dolorum molestias
              quod, maxime ullam. In, ducimus architecto.
            </p>
            <p>12345678-09876543rtyui0-987654</p>
          </div>
        </div>

        <button @click="downloadWithCSS">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jsPDF";
import html2canvas from "html2canvas";

export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  methods: {
 download() {
  const doc = new jsPDF();
  const contentHtml = this.$refs.content.innerHTML;
  doc.fromHTML(contentHtml, 40, 40, {
    width: 170
  });
  doc.save("sample.pdf");
 },

 downloadWithCSS() {
   const doc = new jsPDF();
   /** WITH CSS */
   var canvasElement = document.createElement('canvas');
    html2canvas(this.$refs.content, { canvas: canvasElement 
      }).then(function (canvas) {
    const img = canvas.toDataURL("image/jpeg", 306);
    doc.addImage(img,'JPEG',5,20);
    doc.save("sample.pdf");
   });
 },
}
};
</script>

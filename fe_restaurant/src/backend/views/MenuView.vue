<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="card-title">
                        Daftar Menu
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        @click="menu_id = 0"
                    >
                        <i class="fas fa-plus"></i>
                        Tambah Menu
                    </button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table
                        id="basic-datatables"
                        class="display table table-striped table-hover"
                        >
                        <thead>
                            <tr>
                            <th>Gambar</th>
                            <th>Nama</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Kategori</th>
                            <th>Aksi</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Gambar</th>
                            <th>Nama</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Kategori</th>
                            <th>Aksi</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="row in menu" :key="row.id">
                                <td>Gambar</td>
                                <td>{{ row.name }}</td>    
                                <td>{{ row.description }}</td>
                                <td>{{ row.price }}</td>
                                <td>{{ row.category }}</td>
                                <td>
                                  <div class="w-100 d-flex justify-content-evenly">
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        @click="getMenuDet(row.menu_id)"
                                    >
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button type="button" class="btn btn-danger btn-sm">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                  </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-2 align-items-center">
                        <label for="nama" class="fw-bold text-dark">Nama Menu</label>
                      </div>
                      <div class="col-md-10">
                        <input
                          type="text"
                          v-model="name"
                          class="form-control"
                          id="nama"
                          placeholder="Masukan Nama Menu"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-2 align-items-center">
                        <label for="description" class="fw-bold text-dark">Deskripsi</label>
                      </div>
                      <div class="col-md-10">
                        <textarea name="description" v-model="description" id="description" class="form-control" placeholder="Masukan Deskripsi Menu"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-2 align-items-center">
                        <label for="price" class="fw-bold text-dark">Harga</label>
                      </div>
                      <div class="col-md-10">
                        <input type="number" v-model="price" name="price" id="price" class="form-control" placeholder="Masukan Harga">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-2 align-items-center">
                        <label for="category" class="fw-bold text-dark">Kategori</label>
                      </div>
                      <div class="col-md-10">
                        <select name="category" v-model="category" id="category" class="form-control">
                            <option value="1">Pilih Kategori</option>
                            <option value="2">Makanan</option>
                            <option value="3">Minuman</option>
                            <option value="4">Desert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-2 align-items-center">
                        <label for="gambar" class="fw-bold text-dark">Gambar</label>
                      </div>
                      <div class="col-md-10">
                        <input type="file" ref="ref-gambar" @change="handleFileUpload" name="gambar" id="gambar" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="menu_id" id="menu_id" v-model="menu_id">
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Batal
                  </button>
                  <button
                    v-if="menu_id == 0"
                    type="button"
                    class="btn btn-primary"
                    @click="AddMenu()"
                  >
                    Simpan
                  </button>
                  <button
                    v-if="menu_id > 0"
                    type="button"
                    class="btn btn-primary"
                    @click="EditMenu()"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import axios from 'axios';

export default{
    name : "MenuView",
    data(){
        return{
            menu : [],
            menu_id : 0,
            name : "",
            description : "",
            price : "",
            category : "",
            image : null,
            menu_detail : {}
        }
    },
    mounted(){
        this.getMenu()
    },
    methods:{
        async getMenu(){
          try {
            const response = await axios.get(this.$api + `menu`)
            if(response.data.status_code == 200){
              this.menu = await response.data.data
              this.initDatatable()
            }
          } catch (error) {
            console.log(error)
          }
        },
        initDatatable(){
            $('#basic-datatables').DataTable().destroy()
            $('#basic-datatables').DataTable()
        },
        handleFileUpload(event) {
          this.image = event.target.files[0];
        },
        async AddMenu(){
          let formData = new FormData()
          formData.append('file', this.image)
          formData.append('name', this.name)
          formData.append('description', this.description)
          formData.append('price', this.price)
          formData.append('category', 1)
          
          console.log(formData)
          const response = await axios.post(`${this.$api}menu`, formData)

          if(response.data.status_code == 200){
            alert(response.data.message)
            // this.$("#exampleModal").modal('hide')
            this.getMenu()
          }else{
            console.log(response.data)
            alert(response.data.message)
          }
        },
        async EditMenu(){
          let formData = new FormData()
          formData.append('file', this.image)
          formData.append('name', this.name)
          formData.append('description', this.description)
          formData.append('price', this.price)
          formData.append('category', 1)
          
          console.log(formData)
          const response = await axios.put(`${this.$api}menu/${this.menu_id}`, formData,
          {headers: {
            'Content-Type': 'multipart/form-data'
          }}
          )

          if(response.data.status_code == 200){
            alert(response.data.message)
            // this.$("#exampleModal").modal('hide')
            this.getMenu()
          }else{
            console.log(response.data)
            alert(response.data.message)
          }
        },
        async getMenuDet(menu_id){
          try {
            const response = await axios.get(this.$api + `menu/${menu_id}`)
            if(response.data.status_code == 200){
              this.menu_id = response.data.data[0].menu_id
              this.name = response.data.data[0].name
              this.description = response.data.data[0].description
              this.price = response.data.data[0].price
              this.category = response.data.data[0].category
              this.menu_detail = response.data.data[0]
              console.log(this.menu_detail)
            }
          } catch (error) {
            console.log(error)
          }
        },
    }
}
</script>
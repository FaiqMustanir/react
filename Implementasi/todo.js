export class Todo {
    constructor() {
      this.todos = [];
    }
  
    tambahTugas(tugas) {
      this.todos.push(tugas);
      console.log(`Tugas "${tugas}" telah ditambahkan.`);
    }
  
    hapusTugas(index) {
      const [tugas] = this.todos.splice(index, 1);
      console.log(`Tugas "${tugas}" telah dihapus.`);
    }
  
    tampilkanTugas() {
      console.log("Daftar Tugas:");
      this.todos.forEach((tugas, index) => {
        console.log(`${index + 1}. ${tugas}`);
      });
    }
  }
  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardData = [
    {
      src: "", name: "Cockrach",
      details: `Hire Cockroach pest control services to get rid of cockroaches from home and office. Cockroaches can contaminate the food and surfaces and they can also transmit diseases. It’s Very arduous to get rid of cockroaches as they breed very rapidly. Professional cockroach control services offer you total and effective control over pathogenic cockroaches.`
    },
    {
      src: "", name: "Rodents(Rats)",
      details: `Get rid of household rodents in effective manner with professional rodent control service. Rodents are serious threats to everybody as they carry deadly diseases and can contaminate the food that we eat. Rodents can cause serious damage in and around homes by chewing variety of items available to them like cloths, electronic appliances, wiring etc.`
    },
    {
      src: "", name: "Bedbugs",
      details: `Bed bugs are blood sucking insects. They can badly disturb your good night sleeps. Bed bug bites can cause severe skin rashes, skin blisters, allergic symptoms, and physiological effects. Bed bugs normally bite on exposed parts of skin like face, neck and arms. For efficient bed bug extermination, hire experienced pest control professionals. Chemical treatment is highly recommended for safe and quick removal of bed bugs.`
    },
    {
      src: "", name: "Termites(White Ants)",
      details: `Protect your house and valuable possession from termites with anti-termite pest control treatment. Termites also known as white ants can cause serious menace to your property and belongings such as doors, window frames, wood work, furniture, paper documents, valuable artefacts, accessories etc… Termite exterminators can effectively treat and eliminate the termites from your home & offices.`
    },
    {
      src: "", name: "Mosquitoes",
      details: `The mosquito treatment plan begins with your pest management professional conducting a thorough property inspection and identifying the kind of mosquitoes causing problems. Once the inspection and identification is complete, your pest management professional will prepare a mosquito treatment plan that provides recommendations and assistance for both source reduction and necessary chemical product use`
    },
    {
      src: "", name: "Covid Disinfection",
      details: `Disinfection reduces the growth of viruses, fungi, and types of harmful bacteria.You can clean every day, but you should also disinfect to keep your home or workplace safe.Disinfection effectively greatly reduces all bacteria, not just a specific type. `
    },

  ]


  // currentPage:any=1
  // itemsPerPage:any
  p: any = 1
  constructor() { }
  ngOnInit(): void {
  }

  change(typ: any) {
    if (this.p < 3 && this.p >= 0) {
      this.page(typ)
      console.log(typ);
    }
    else if (this.p == 3) {
      this.p = 0
      this.page(typ)
    }
    else if (this.p < 0) {
      this.p = 2
      this.page(typ)
    }
  }
  page(typ: any) {
    console.log(this.p);

    if (typ == "perv") {
      this.p = this.p - 1
    }
    else {
      this.p = this.p + 1
    }
  }
}

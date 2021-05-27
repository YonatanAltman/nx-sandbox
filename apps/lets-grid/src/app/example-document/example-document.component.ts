import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-sandbox-example-document',
  templateUrl: './example-document.component.html',
  styleUrls: ['./example-document.component.scss']
})
export class ExampleDocumentComponent implements OnInit {
  title = 'The best avenger';
  body = `Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books. He appears in American comic books published by Marvel Comics, as well as in a number of movies, television shows, and video game adaptations set in the Marvel Universe. In the stories, Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues, and accompanied him with many supporting characters, such as J. Jonah Jameson, Harry Osborn, Max Modell, romantic interests Gwen Stacy and Mary Jane Watson, and foes such as Doctor Octopus, the Green Goblin and Venom. His origin story has him acquiring spider-related abilities after a bite from a radioactive spider; these include clinging to surfaces, superhuman strength and agility, and detecting danger with his "spider-sense." He then builds wrist-mounted "web-shooter" devices that shoot artificial spider-webbing of his own design.`;
  footer = 'By Tony Stark';

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  overlayOpen = signal(false);
  recentSearches = signal<string[]>(["สวนไก่","samsen","ramen","กะเพรา"]);

  constructor() { }
  
  search(searchTerm: string){
    this.overlayOpen.set(false);
    this.addToRecentSearches(searchTerm);
  }

  addToRecentSearches(searchTerm: string){
    const lowerCaseTerm = searchTerm.toLowerCase();
    this.recentSearches.set([lowerCaseTerm, ...this.recentSearches().filter((s) => s!== lowerCaseTerm)]);
  }
}

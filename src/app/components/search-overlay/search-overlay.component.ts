import { Component, inject } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'app-search-overlay',
  templateUrl: './search-overlay.component.html',
  styleUrl: './search-overlay.component.css'
})
export class SearchOverlayComponent {
  searchBarService = inject(SearchBarService);
  recentSearches = this.searchBarService.recentSearches;
}

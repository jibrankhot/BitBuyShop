import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FeatureCurationsCard } from './featurecurationcard.model';
import { FeatureCurations } from './featurecurationsData';

@Injectable({
    providedIn: 'root'
})
export class FeatureCurationsService {
    // store data in a BehaviorSubject (reactive and subscribable)
    private readonly curationsSubject = new BehaviorSubject<FeatureCurationsCard[]>(FeatureCurations);

    // expose this as a public observable (async pipe will use this)
    readonly featureCurations$: Observable<FeatureCurationsCard[]> = this.curationsSubject.asObservable();

    constructor() { }

    // Get all curations (optional if you want a method)
    getCurations(): Observable<FeatureCurationsCard[]> {
        return this.featureCurations$;
    }

    // Filter by tags (updates the BehaviorSubject)
    filterByTags(tags: string[]): void {
        if (!tags.length) {
            this.curationsSubject.next(FeatureCurations);
            return;
        }
        const filtered = FeatureCurations.filter(item =>
            item.tags?.some(tag => tags.includes(tag))
        );
        this.curationsSubject.next(filtered);
    }

    // Find by link (just a one-time observable)
    getByLink(link: string): Observable<FeatureCurationsCard | undefined> {
        const found = FeatureCurations.find(item => item.link === link);
        return new BehaviorSubject(found).asObservable();
    }
}

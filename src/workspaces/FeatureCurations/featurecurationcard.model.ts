export interface FeatureCurationsCard {
    title: string;
    subtitle: string;
    image: string;
    link: string;

    // optional future extensions
    collectionId?: string;
    tags?: string[];
}

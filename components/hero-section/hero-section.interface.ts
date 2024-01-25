export interface HeroData {
    image: string;
    title?: string;
    description?: string;
    button?: {
        text?: string;
        navigateTo?: string;
    };
}

export interface HeroProps {
    heroData: HeroData;
}

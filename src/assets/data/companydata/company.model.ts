export interface CompanyLink {
    label: string;
    url: string;
}

export interface CompanySection {
    title: string;
    links: CompanyLink[];
}

export interface CompanyContact {
    phone: string;
    email: string;
    address: string;
    addressLink: string;
}

export interface CompanyLogo {
    src: string;
    link: string;
}

export interface CompanySubscribe {
    title: string;
    description: string;
}

export interface CompanySocial {
    title: string;
    links: CompanyLink[];
}

export interface CompanyBottom {
    copyright: string;
    paymentImg: string;
    paymentAlt: string;
}

export interface Company {
    companyName: string; // Added property
    logo: CompanyLogo;
    contact: CompanyContact;
    sections: CompanySection[];
    subscribe: CompanySubscribe;
    social: CompanySocial;
    bottom: CompanyBottom;
}

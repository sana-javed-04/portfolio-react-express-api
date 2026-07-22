
// const API_URL = "/api/portfolio-data";

// // Sab se pehle aik helper function banayein jo poora data ek sath fetch karega
// async function fetchAllData() {
//     const res = await fetch(API_URL);
//     if (!res.ok) {
//         throw new Error("Failed to load portfolio data from backend");
//     }
//     return await res.json();
// }


const API_URL = "/api/portfolio-data";

let portfolioData = null;

async function fetchAllData() {

    if (portfolioData) {

        return portfolioData;

    }

    const res = await fetch(API_URL);

    if (!res.ok) {

        throw new Error("Failed to load portfolio data");

    }

    portfolioData = await res.json();

    return portfolioData;

}

// ================= Profile =================
export async function getProfile() {
    const data = await fetchAllData();
    return data.profile || {};
}

// ================= Skills =================
export async function getSkills() {
    const data = await fetchAllData();
    return data.skills || [];
}

// ================= Projects =================
export async function getProjects() {
    const data = await fetchAllData();
    return data.projects || [];
}

// ================= Mini Projects =================
export async function getMiniProjects() {
    const data = await fetchAllData();
    return data.miniProjects || [];
}

// ================= Certificates =================
export async function getCertificates() {
    const data = await fetchAllData();
    return data.certificates || [];

}

// ================= Blog =================
export async function getBlogs() {
    const data = await fetchAllData();
    return data.blogs || [];
}

// ================= Testimonials =================
export async function getTestimonials() {
    const data = await fetchAllData();
    return data.testimonials || [];
}

// ================= Contact =================
export async function getContact() {
    const data = await fetchAllData();
    return data.contact || {};
}

// ================= Footer =================
export async function getFooter() {
    const data = await fetchAllData();
    return data.footer || {};
}

// Localhost hata kar humne isay Express API ka route de diya hai
const API = "/api/portfolio-data";

// Helper function taake baar baar error handling na likhni pare aur code clean rahe
async function fetchData(key) {
    const res = await fetch(API);
    if (!res.ok) {
        throw new Error(`Failed to load ${key}`);
    }
    const data = await res.json();
    return data[key] || (key === 'profile' || key === 'contact' || key === 'footer' ? {} : []);
}

// ================= Profile =================
export async function getProfile() {
    return await fetchData('profile');
}

// ================= Skills =================
export async function getSkills() {
    return await fetchData('skills');
}

// ================= Projects =================
export async function getProjects() {
    return await fetchData('projects');
}

// ================= Mini Projects =================
export async function getMiniProjects() {
    return await fetchData('miniProjects');
}

// ================= Blog =================
export async function getBlogs() {
    return await fetchData('blogs');
}

// ================= Testimonials =================
export async function getTestimonials() {
    return await fetchData('testimonials');
}

// ================= Contact =================
export async function getContact() {
    return await fetchData('contact');
}

// ================= Footer =================
export async function getFooter() {
    return await fetchData('footer');
}

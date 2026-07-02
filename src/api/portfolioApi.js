const API = "http://localhost:3000";

// ================= Profile =================

export async function getProfile() {

    const res = await fetch(`${API}/profile`);

    if (!res.ok) {

        throw new Error("Failed to load profile");

    }

    return await res.json();

}

// ================= Skills =================

export async function getSkills() {

    const res = await fetch(`${API}/skills`);

    if (!res.ok) {

        throw new Error("Failed to load skills");

    }

    return await res.json();

}

// ================= Projects =================

export async function getProjects() {

    const res = await fetch(`${API}/projects`);

    if (!res.ok) {

        throw new Error("Failed to load projects");

    }

    return await res.json();

}

// ================= Mini Projects =================

export async function getMiniProjects() {

    const res = await fetch(`${API}/miniProjects`);

    if (!res.ok) {

        throw new Error("Failed to load mini projects");

    }

    return await res.json();

}

// ================= Blog =================

export async function getBlogs() {

    const res = await fetch(`${API}/blogs`);

    if (!res.ok) {

        throw new Error("Failed to load blogs");

    }

    return await res.json();

}

// ================= Testimonials =================

export async function getTestimonials() {

    const res = await fetch(`${API}/testimonials`);

    if (!res.ok) {

        throw new Error("Failed to load testimonials");

    }

    return await res.json();

}

// ================= Contact =================

export async function getContact() {

    const res = await fetch(`${API}/contact`);

    if (!res.ok) {

        throw new Error("Failed to load contact");

    }

    return await res.json();

}


export async function getFooter() {

    const res = await fetch(`${API}/footer`);

    if (!res.ok) {

        throw new Error("Failed to load footer");

    }

    return await res.json();

}
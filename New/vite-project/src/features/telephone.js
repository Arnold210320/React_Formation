import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    List: [
        
        {
            id: 1,
            name: "Iphone 15",
            price: 450000,
            image: "https://imgs.search.brave.com/SOQCNprzWUcJ_XZAptboZc77RTzq-YB4GssN2TjaIlE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJvbnl4LmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEy/L2lwaG9uZS0xNS12/ZXJ0LTEuanBn",
        },
        {
            id: 2,
            name: "Iphone 14",
            price: 400000,
            image: "https://imgs.search.brave.com/D6YeIKZpz8vC69koJvjGhBNSdPzg76wevDYpeLzvLiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFiSzZQTU9DM0wu/anBn",
        },
        {
            id: 3,
            name: "Iphone 13 pro",
            price: 350000,
            image: "https://imgs.search.brave.com/OC8vouL60KxnhDouie4AzLMlvjYOOqJF-EMz2C2fFHg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL25l/d3Nyb29tL2ltYWdl/cy9wcm9kdWN0L2lw/aG9uZS9nZW8vQXBw/bGVfaVBob25lLTEz/LVByb19pUGhvbmUt/MTMtUHJvLU1heF9H/RU9fMDkxNDIwMjFf/aW5saW5lLmpwZy5s/YXJnZS5qcGc",
        },
        {
            id: 4,
            name: "Iphone 12",
            price: 300000,
            image: "https://imgs.search.brave.com/r8sVs87JLlGv1jYk4PhrzVtGlMVyn7xH4P1nHDZwlXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExd3NqQnRXZUwu/anBn",
        },
        {
            id: 5,
            name: "Iphone 11",
            price: 250000,
            image: "https://imgs.search.brave.com/VF49n-siGy9xzDVdvuGo_3wdGNc01EietvHw0SGSuVk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMmU2/Y2N1amIzbWtxZi5j/bG91ZGZyb250Lm5l/dC8wMTA2YmI2Zi0z/OTc1LTQ3OTQtYjlh/MC03ZDkyMDY2OTQ4/NGMtMV82Njk5ZTg0/Yy05NDJlLTRiYTIt/OGRkOS01YTcwZmJl/ZDc4ZmUuanBn",
        },
        {
            id: 6,
            name: "Iphone 8",
            price: 200000,
            image: "https://imgs.search.brave.com/CwvF9Crt2gHDYFh1cksGHle7y0lDHXE3oSkKwu_k4GQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YWZic2hvcC5mci9t/ZWRpYS84Yi84Yi8x/ZC8xNzExNTUxNTg1/L2lwaG9uZTgtTm9p/ck1hdCgxKS5qcGc",
        },
        {
            id: 7,
            name: "Iphone 7",
            price: 150000,
            image: "https://imgs.search.brave.com/YT3G8k8n40tDVrCMbmEF1MEeahwkk1nHlOiFsih67fY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL2Fw/cGxlL2FwcGxlLWlw/aG9uZS03LXJlZC5q/cGc",
        },
        {
            id: 8,
            name: "Iphone 6",
            price: 100000,
            image: "https://imgs.search.brave.com/0DQakytJpwFVP67ude3jwasnWQRaPjbFFjAAdhMn5rw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDc0/Nzc5OTU0L3Bob3Rv/L2FuLWFwcGxlLWlw/aG9uZS02LXNtYXJ0/cGhvbmUtdGFrZW4t/b24tb2N0b2Jlci0y/LTIwMTQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXZqaV84/c3E1ZVJsdEJjSWts/MmFMdzVYc3BKQVdJ/eTllMmVJQWhXNmJh/UnM9",
        },
        {
            id: 9,
            name: "macbook",
            price: 50000,
            image: "https://imgs.search.brave.com/Mnm87bC3IpUnGTuLOhtqgZBOWMIgooOIOpepzkI_kPU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L0FvbjZl/djdYMHozaUJiaG8x/anJjUDFKZHVtbz0v/NDAweDAvYXJ0aWNs/ZS1uZXcvMjAyMS8x/MC9tYWNib29rLXBy/by0xNC1iYWNrLmpw/ZWc_bG9zc3k",
        }
    ]
}

export const telSlice = createSlice({
    name: "tel",
    initialState

    })

export default telSlice.reducer;




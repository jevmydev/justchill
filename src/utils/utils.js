import { meditationQuotes, reflectionPrompts, intentions } from "../mocks/reflections";
import { greetings } from "../mocks/greetings";

const today = new Date();
const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const index = daySeed % meditationQuotes.length;

export const getRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
};

export const getTodaysQuote = () => {
    return meditationQuotes[index];
};

export const getTodaysReflection = () => {
    return reflectionPrompts[index];
};

export const getTodaysIntention = () => {
    return intentions[index];
};

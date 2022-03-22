export type Task = {
    title: string,
    points: string[]
}

export const newTask = (title: string, points: string[]) => ({title, points})
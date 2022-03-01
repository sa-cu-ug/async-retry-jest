async function delay(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

export async function provideResult(): Promise<string[]> {
    await delay(100);
    return ['A', 'B', 'C'];
}

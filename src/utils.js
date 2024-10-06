export function nameToURL(name) {
    return name && name.toLowerCase().replaceAll(" ", "-");
}
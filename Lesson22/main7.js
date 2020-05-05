/* Пользователь указывает объем флешки в Гб.
Программа должна посчитать, сколько файлов размером в 820 Мб
помещается на флешку. */
let flashDriveVolume = prompt("indicate the volume of the flash drive");
let flashDriveVolumeResult = (flashDriveVolume * 1000) / 820;
document.write(Math.floor(flashDriveVolumeResult) + " files");

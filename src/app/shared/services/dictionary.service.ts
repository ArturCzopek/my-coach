export abstract class DictionaryService {

  protected dictionary: any = null;

  protected dateDictionarySettings: any = null;

  public getDictionaryValue(key: string): string {
    if (this.dictionary == null) {
      this.dictionary = this.getDictionaryFromDb();
    }

    return this.dictionary[key] || this.getFormattedKey(key);
  }

  public getDateDictionarySettings(): any {

    if (this.dateDictionarySettings == null) {
      if (this.dictionary == null) {
        this.dictionary = this.getDictionaryFromDb();
      }

      this.dateDictionarySettings = this.createDateDictionarySettings();
    }

    return this.dateDictionarySettings;
  }

  private getFormattedKey(key: string): string {
    let stack = key.split(".");
    let last: string = stack.pop();
    let first: string = stack.pop();

    return `${first}.${last}`;
  }


  abstract getDictionaryFromDb(): any;

  abstract createDateDictionarySettings(): any;
}

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
    const stack = key.split(".");
    const last: string = stack.pop();
    const first: string = stack.pop();

    return `${first}.${last}`;
  }


  abstract getDictionaryFromDb(): any;

  abstract createDateDictionarySettings(): any;
}

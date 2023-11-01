class CountersPages {

   countButton(label) {
        return element(by.id(`countButton-${label}`))
    }

    countLabel(label) {
        return element(by.id(`countLabel-${label}`))
    }

    countAmount(label) {
        return element(by.id(`count-${label}`))
    }

    async pressCountButton(labelCount, times){
        await this.countButton(labelCount).multiTap(times);
    }
}

export default new CountersPages();
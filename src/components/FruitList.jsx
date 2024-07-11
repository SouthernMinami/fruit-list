import { Card } from "./Card";

export const FruitList = () => {
    const fruits = [
        {
            name: "Apple",
            calorie: 95,
            macro: "Carbohydrate",
            img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg"
        },
        {
            name: "Banana",
            calorie: 105,
            macro: "Carbohydrate",
            img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg"
        },
        {
            name: "Orange",
            calorie: 62,
            macro: "Carbohydrate",
            img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg"
        },
        {
            name: "Mango",
            calorie: 99,
            macro: "Carbohydrate",
            img: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg"
        }
    ]

    return (
        <div className="fruit-list">
            {fruits.map((fruit, index) => (
                <Card key={fruit.name} {...fruit} />
            ))}
        </div>
    )
}
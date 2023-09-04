import React from 'react';
import {ScrollView, View} from 'react-native';
import ItemCard from '../components/ItemCard';

function generateItems(count: number) {
  const items = [];
  for (let i = 1; i <= count; i++) {
    items.push({
      id: i.toString(),
      name: `Item ${i}`,
      description: `Description for Item ${i}`,
      image: `https://via.placeholder.com/200?text=Item+${i}`,
    });
  }
  return items;
}

const dummyData = generateItems(3000);

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        {dummyData.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
